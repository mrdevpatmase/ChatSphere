import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          // console.log(res.data);
          setMessage(res.data);
        } catch (error) {
          console.log("Erron in getting Messages", error);
        } finally {
          setLoading(false);
        }
      }
    };
    getMessage();
  }, [selectedConversation, setMessage]);
  return { loading, messages };
}

export default useGetMessage;
