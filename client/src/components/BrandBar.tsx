import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const style = {
    marginTop: '20px'
}

export const BrandBar = observer(() => {
    const {devices} = useContext(Context)
    return (
        <ListGroup style={style} horizontal>
            {devices?.brands?.map((brand: { id: number, name: string }) =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    onClick={() => devices.setSelectedBrand(brand)}
                    active={devices.selectedBrand === brand}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
})


