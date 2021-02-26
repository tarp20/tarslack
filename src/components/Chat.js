import React, {useEffect} from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';

function Chat() {

  let { channelId } = useParams();

  
  const getChannel = () =>{
    db.collection('rooms')
    .doc(channelId)
    .onSnapshot((snapshot)=>{
      console.log(snapshot.data)
    })
  }

  useEffect(()=>{
  getChannel();
  },[channelId])
    return (
        <Container>
            <Header>
              <Channel>
                  <ChannelName>
                      #bestChannel

                  </ChannelName>
                  <ChannelInfo>
                   Simply the best
                  </ChannelInfo>

              </Channel>
              <ChannelDetail>
               <div>
                   Detail
               </div>
               <Info />
              </ChannelDetail>
            </Header>
           <MessageContainer>
            <ChatMessage />
          </MessageContainer>
          <ChatInput />
        </Container> 
        
    )
}

export default Chat




const Container = styled.div`
display : grid;
grid-template-rows: 64px auto min-content;
`

const Header = styled.div`
padding-left: 20px;
padding-right: 20px;
display: flex;
align-items: center;
border-bottom: 1px solid rgba(83,39,83,.13);
justify-content: space-between ;


`
const Channel = styled.div``

const ChannelName = styled.div`
 font-weight: 700;
`

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;

`
const Info = styled(InfoOutlinedIcon)`
margin-left: 10px; 
`

const ChannelDetail = styled.div`
display: flex;
align-items: center;
color: #606060;
`

const MessageContainer = styled.div`

`


