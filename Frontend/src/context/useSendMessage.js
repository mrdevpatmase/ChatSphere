import React, { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  const sendMessages = async (message) => {
    setLoading(true);
    if (selectedConversation && selectedConversation._id) {
      try {
        const res = await axios.post(
          `/api/message/send/${selectedConversation._id}`,
          { message } // for type send
        );
        // console.log(res.data);
        // setMessage([...messages, res.data]);
        setMessage([...messages, res.data.newMessage]);
      } catch (error) {
        console.log("Erron in getting Messages", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return { loading, sendMessages };
}
