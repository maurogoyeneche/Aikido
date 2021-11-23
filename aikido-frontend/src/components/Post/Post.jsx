import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./Post.module.css";

function Post() {
  return (
    <>
      <Card
        className="d-flex"
        style={{ width: "100%", display: "flex !important" }}
      >
        <img
          className="img-fluid"
          // style={{ height: "400px " }}
          src="/img/clasesAJU.jpg"
          alt="clases en AJU"
        />
        <Card.Body className={styles.newsCardBody}>
          <Card.Title className={styles.newsTitle}>Post Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            iure deserunt, sequi aspernatur vitae, iste quae eos dignissimos aut
            at, necessitatibus autem earum fugiat inventore temporibus minus
            quod hic expedita.
          </Card.Text>
          <Button className="btn-secondary">Read more...</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Post;
