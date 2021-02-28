import { Container, Grid } from "@material-ui/core";
import Button from "components/Button/Button";
import Title from "components/Title/Title";
import React from "react";
import "./Introduction.scss";
function Introduction() {
  return (
    <Container className="introduction">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Title title="GIỚI THIỆU" />
        </Grid>
        <Grid item xs={10} justify="center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias
            veniam, ex rem mollitia assumenda odio enim incidunt architecto?
            Officia corporis minima repudiandae dicta quam nesciunt minus
            veritatis omnis veniam, aliquam odit porro ris minima repudiandae
            dicta quam nesciunt minus veritatis omnis veniam, aliquam odit porro
            in totam? Cum, quibusdam voluptatem rem officiis ullam, amet
            adipisci, consequuntur perferendis odio earum commodi reiciendis
            mollitia.
          </p>
        </Grid>
        <Grid item>
          <Button className="center-block" color="black" text="XEM THÊM" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Introduction;
