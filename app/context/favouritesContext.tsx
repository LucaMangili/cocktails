import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export type FavouriteProps = {
    children: React.ReactNode
}

export type ContextType = {
    favourites: any[];
    setFavourites: React.Dispatch<any>;
    addNewFavourites: (favourite: any[]) => void;

}

const initialContext: ContextType = {
    favourites: ["baubau"],
    setFavourites: (): void => { },
    addNewFavourites: (favourites: any[]) => { }
}

export const Context = createContext<ContextType>(initialContext);

export const Provider = ({ children }: FavouriteProps) => {

    const [favourites, setFavourites] = useState(["ciao"]);

    const addNewFavourites = (favourite: any[]) => {

        console.log("going to set new favourites!")

        setFavourites(favourites.concat(favourite));
    }


    const favouritesContext: ContextType = {
        favourites,
        setFavourites,
        addNewFavourites
    };

    console.log("provider -->", favouritesContext)

    return <Context.Provider value={favouritesContext}>{children}</Context.Provider>;

};


Provider.propTypes = {
    favourites: PropTypes.array
};

Provider.defaultProps = {
    favourites: []
};


export const withContext = (ChildComponent: any) => (props: FavouriteProps) => (
    <Context.Consumer>
        {
            context => <ChildComponent {...props} global={context} />
        }
    </Context.Consumer>
);