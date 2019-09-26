import React, { Component } from "react";
import axios from "axios";
import { ButtonContainer, Button } from "../../components/Button";
import Navigation from "../../components/Nav";
import AddMessage from "../../components/AddMessage";

class Streams extends Component {
  state = {
    streams: [],
    messages: [],
    // messageText: "",
    userID: null
  };

  // the getStream function is making a request to the server and grabbing the User document (object) within the User
  // collection
  
  getStream() {

    axios
      .get("/api/user/" + this.state.userID)
      .then(response => {
        console.log("get stream response: ");
        console.log(response.data.streams);
        this.setState({
          streams: response.data.streams
        })
      // this.state.streams.push(response.data.streams)
      console.log(this.state.streams);
    });
  }
  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: there is a user saved in the server session: ");
        this.setState({
          userID: response.data.user.id
        });
        console.log(this.state);
        this.getStream();
      } else {
        console.log("Get user: no user");
        this.setState({
          userID: null
        });
      }
    });
  }
  componentDidMount() {
    this.getUser();
    console.log(this.state.userID);
  }

  // componentDidUpdate() {
  //   if ( this.state.userID !== this.props.userID ){
  //     this.setState({
  //       userID: this.props.userID
  //     })
  //     this.getStream()
  //   }
  //   console.log(this.props);
  // };

  unsubscribeUser(id) {
    // axios#put(url[, data[, config]])
    axios.post("/api/streams/" + id).then(res => {
      console.log(res);
      if (res.data) {
        const { streams } = this.state;

        this.setState({
          streams: streams.filter(stream => stream._id !== id)
        });
      }
    });
  }

  sendMessage = messageText => {
    console.log(messageText);
    console.log(this.state.userID);
    axios
      .post("/api/messages/", {
        messageText: messageText,
        id: this.state.userID
      })
      .then(res => {
        console.log("Message Sent!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <ButtonContainer>
          {this.state.streams.map((stream, index) => (
            <Button
              onClick={() => this.unsubscribeUser(stream._id)}
              index={index}
              key={index}
              id={stream._id}
              name={stream.streamName}
              linkName={"Unsubscribe"}
            />
          ))}
        </ButtonContainer>
        <AddMessage sendMessageFunction={this.sendMessage} />
      </div>
    );
  }
}

export default Streams;
