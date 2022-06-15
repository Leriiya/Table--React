import React from "react";

const DetailItem = ({ detailItemData }) => {
    return (
        <div>
            <div>
                id:  <b>{detailItemData.id}</b>
            </div>
            <div>
                firstName: <b>{detailItemData.firstName}</b>
            </div>
            <div>
                lastName: <b>{detailItemData.lastName}</b>
            </div>
            <div>
                email: <b>{detailItemData.email}</b>
            </div>
            <div>
                description: <b>{detailItemData.description}</b>
            </div>

            {/* <div>
                streetAddress: <b>{detailItemData.address.streetAddress}</b>
            </div> */}
            {/* <div>
                city: <b>{detailItemData.address.city}</b>
            </div> */}

        </div>
    )
}

export default DetailItem;