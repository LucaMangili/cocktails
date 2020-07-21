import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { cocktailType } from '../cocktailType'

export type FavouriteProps = {
    children: React.ReactNode
}

export type ContextType = {
    favourites: cocktailType[];
    setFavourites: React.Dispatch<any>;
    addNewFavourites: (favourite: cocktailType) => void;
}

const initialContext: ContextType = {
    favourites: [],
    setFavourites: (): void => { },
    addNewFavourites: (favourites: any) => { }
}

export const Context = createContext<ContextType>(initialContext);

export const Provider = ({ children }: FavouriteProps) => {

    const [favourites, setFavourites] = useState<cocktailType[]>([]);


    const addNewFavourites = (favourite: cocktailType) => {

        // let ciao: boolean = false;

        // for (let drink of favourites) {
        //     if (drink.idDrink === favourite.idDrink) {
        //         ciao = true;
        //         break;
        //     }
        // }

        // if (!ciao) {
        //     favourites.push(favourite)
        // }


        // let finder2 = favourites.findIndex(el => el.idDrink === favourite.idDrink)

        // if (finder2 === -1) {
        //     favourites.push(favourite)
        // }

        let finder = favourites.find(el => el.idDrink === favourite.idDrink)


        if (finder === undefined) {
            setFavourites([...favourites, favourite]);
        }
    }

    const favouritesContext: ContextType = {
        favourites,
        setFavourites,
        addNewFavourites
    };

    return <Context.Provider value={favouritesContext}>{children}</Context.Provider>;

};


Provider.propTypes = {
    favourites: PropTypes.any
};

Provider.defaultProps = {
    favourites: {}
};
