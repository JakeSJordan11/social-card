import * as React from "react";
import SocialCard from "./Components/SocialCard";
import { Grid } from "@material-ui/core";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {};
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item lg={4}>
          <SocialCard
            image="/mistro.png"
            title="Mistro"
            entireCardStyle={{ height: 300 }}
            cardBottomStyle={{ backgroundColor: "#303030", height: 100 }}
            cardDescriptionStyle={{ color: "#EEEEEE" }}
            cardTitleStyle={{ color: "#EEEEEE" }}
          >
            Misto's are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </SocialCard>
        </Grid>
        <Grid item lg={4}>
          <SocialCard
            title="Bumdrum"
            image="https://i.pinimg.com/236x/64/60/0b/64600bd2d0c155dfa23299f7c9a1f0b5--percussion-instrument-music-instruments.jpg"
            entireCardStyle={{ height: 300 }}
            cardBottomStyle={{ backgroundColor: "#303030", height: 100 }}
            cardDescriptionStyle={{ color: "#EEEEEE" }}
            cardTitleStyle={{ color: "#EEEEEE" }}
          >
            A facinating instrument place by the hands as well as the buttox
          </SocialCard>
        </Grid>
        <Grid item lg={4}>
          <SocialCard
            title="Flamy"
            image="https://cdn1.vectorstock.com/i/1000x1000/27/05/flamingo-cartoon-vector-892705.jpg"
            entireCardStyle={{ height: 300 }}
            cardBottomStyle={{ backgroundColor: "#303030", height: 100 }}
            cardDescriptionStyle={{ color: "#EEEEEE" }}
            cardTitleStyle={{ color: "#EEEEEE" }}
          >
            With the neck of a golfclub, this wonderful dufous was used as such
            in the film Alice In Wounderland
          </SocialCard>
        </Grid>
      </Grid>
    );
  }
}

export default App;
