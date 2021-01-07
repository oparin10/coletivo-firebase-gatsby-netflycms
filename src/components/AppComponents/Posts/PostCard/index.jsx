import { Button } from "@material-ui/core"
import React from "react"
import styled from "styled-components"

const PostCardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  width: 278.99px;
  height: 378.16px;
  padding: 1em;
  padding-top: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Barlow";
`

const PostCardImageContainer = styled.div`
  background: #ffffff;
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.25);
  width: 267.87px;
  height: 199.28px;
`

const PostCardImage = styled.img`
  width: 100%;
  height: 100%;
`

const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5em;
  padding-top: 1em;
`

const PostCardTitle = styled.div`
  color: #333;
  font-size: 18px;
  font-weight: 700;
  align-self: flex-start;
`

const PostCardDate = styled.div`
  align-self: flex-start;
  font-size: 12px;
  color: #797979;
`

const PostCardExcerpt = styled.div`
  align-self: flex-start;
  font-size: 14px;
  color: #2a2a2c;
  padding-top: 1em;
`

const PostCallToActionContainer = styled.div`
  width: 100%;
`

const PostCard = ({ image, title, date, excerpt }) => {
  return (
    <div>
      <PostCardContainer>
        <PostCardImageContainer>
          <PostCardImage
            src={image ? image : "https://via.placeholder.com/150"}
          ></PostCardImage>
        </PostCardImageContainer>
        <PostInfoContainer>
          <PostCardTitle>
            {title ? title : "Placeholder title goes here "}
          </PostCardTitle>
          <PostCardDate>{date ? date : "03 de dezembro de 2021"}</PostCardDate>

          <PostCardExcerpt>
            {excerpt ? excerpt : "Lorem ipsum dolor sit amet, consectet..."}
          </PostCardExcerpt>
        </PostInfoContainer>

        <PostCallToActionContainer>
          <Button fullWidth variant="contained" color="secondary">
            Ler post
          </Button>
        </PostCallToActionContainer>
      </PostCardContainer>
    </div>
  )
}

export default PostCard
