import * as React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";

export interface SocialCardProps {
  image: string;
  title: string | number;
  description?: string;
  cardBottomStyle?: React.CSSProperties;
  entireCardStyle?: React.CSSProperties;
  cardDescriptionStyle?: React.CSSProperties;
  cardTitleStyle?: React.CSSProperties;
}

export interface SocialCardState {
  open: boolean;
}

class SocialCard extends React.Component<SocialCardProps, SocialCardState> {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <Card onClick={this.handleClick}>
        <CardActionArea>
          <CardMedia
            image={this.props.image}
            style={this.props.entireCardStyle}
          />
          <CardContent style={this.props.cardBottomStyle}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={this.props.cardTitleStyle}
            >
              {this.props.title}
            </Typography>
            <Typography component="p" style={this.props.cardDescriptionStyle}>
              {this.state.open === true && this.props.children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default SocialCard;
