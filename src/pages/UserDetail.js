import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";
import {
  format,
  parseISO,
  formatDistance,
  formatRelative,
  subDays,
} from "date-fns";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const UserDetail = () => {
  const { id } = useParams();
  const mainStyles = stylesFunc();
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    fetchData(`/user/${id}`)
      .then((res) => {
        setUserDetail(res);
        console.log("res", res);
      })
      .catch()
      .finally();
    // return () => {};
  }, [id]);

  console.log(userDetail);

  return (
    <Container className={mainStyles.wrapper}>
      <img src={userDetail?.picture} alt="user" />
      <Typography variance="h4">{userDetail?.firstName}</Typography>
      <Typography variance="h4">{userDetail?.lastName}</Typography>
      <Typography variance="h4">
        {format(parseISO(userDetail?.registerDate), "MMM/dd/yy")}
      </Typography>
      <Typography variance="h4">{userDetail?.phone}</Typography>
    </Container>
  );
};

export default UserDetail;
