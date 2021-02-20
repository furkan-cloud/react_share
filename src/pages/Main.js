import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
  capitalize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { fetchData } from "../helper/FetchData";
import MediaCard from "../components/MediaCard";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    textAlign: "center",
  },
  avatar: {
    margin: "3rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Main = () => {
  const [userList, setUserList] = useState();
  const mainStyles = stylesFunc();
  const { REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN } = process.env;

  const fetchData = async () => {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}/user`, {
      headers: {
        "app-id": REACT_APP_API_TOKEN,
      },
    });
    setUserList(response?.data?.data);
  };

  useEffect(() => {
    // const result = fetchData();
    // setUserList(result);
    fetchData();
  }, []);

  return (
    <Container className={mainStyles.wrapper}>
      <Grid container spacing={1}>
        {userList?.map((user) => {
          return (
            <Grid item xs={6} sm={4} spacing={3}>
              <MediaCard
                id={user.id}
                userImage={user?.picture}
                userName={`${capitalize(user?.title)} ${user?.firstName} ${
                  user?.lastName
                }`}
                userEmail={user?.email}
                key={user?.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Main;
