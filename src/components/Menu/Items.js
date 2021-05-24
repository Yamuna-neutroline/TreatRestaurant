import { Grid } from "@material-ui/core";
import Dish from "./Dish";

const Items = (props) => {
  return (
    <Grid container spacing={2}>
      {props.item.map((menu, index) => {
        return (
          <Grid item xs={12} sm={6} key={index}>
            <Dish
              name={menu.dishname}
              price={menu.price}
              description={menu.dishitems}
              id={menu.id}
              reference={menu.reference}
              pic={menu.pic}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Items;
