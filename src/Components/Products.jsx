import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Item, Container, List } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ReviewOrder from "./ReviewOrder";
import ArticlesAPI from "../modules/ArticlesAPI";

const Products = () => {
  const { products } = useSelector((state) => state);

  const displayProducts = (products) => {
    let productsArray = [];
    Object.entries(products).map((category) => {
      productsArray.push(category[1]);
    });
    return productsArray.flat();
  };

  useEffect(() => {
    ArticlesAPI.fetchProducts();
  }, []);
  const addToOrder = async (id) => {
    const response = await axios.post("https:reqres.in/api/orders", {
      params: { product_id: id },
    });
    toast(response.data.message, { toastId: "message-box" });
    // Need to save order ID here
  };

  
  const productlist = displayProducts(products).map((product) => {
    return (
      <Card key={product.id}>
        <Item.Content>
          <Item.Image
            size="tiny"
            src={product.image}
            style={{ height: 200 + "px", width: "auto" }}
          />
          <Item.Header>{product.name}</Item.Header>
          <Item.Meta> {`${product.price}kr`}</Item.Meta>
          <Item.Description>{product.description}</Item.Description>
          <button
            data-cy="order-button"
            onClick={() => addToOrder(product.id)}
            className="ui button"
          >
            {" "}
            order +
          </button>
        </Item.Content>
      </Card>
    );
  });
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 30,
        }}
      >
        <ReviewOrder />
      </div>
      <br />
      <Container>
        <br />
        <List inverted data-cy="products-list" size="big">
          {productlist}
        </List>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Products;
