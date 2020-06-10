import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import covidDataProviderQL from '../../covidDataProviderQL'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // maxWidth:650,
    marginTop: 12,
    marginBottom: 12,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // let covid = covidDataProviderQL.getCountry(null, {identifier: "Ukraine"})
  // console.log("SimpleCard -> covid", covid)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          User statistics
        </Typography>
        <Typography variant="h5" component="h2">
          Number of users: 5
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          Max users: 15
          name: ${covid.country.name}
          todayCases: ${covid.country.todayCases}
        </Typography> */}
        {/* <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
