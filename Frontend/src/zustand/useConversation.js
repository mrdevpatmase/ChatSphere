import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  messages: [],

  setSelectedConversation: (selectedConversation) => {
    console.log("Setting selected conversation:", selectedConversation);
    set({ selectedConversation, messages: [] }); // ✅ Reset messages when switching conversation
  },

  setMessage: (newMessages) => {
    console.log("Updating messages in Zustand:", newMessages);
    set(() => ({ messages: [...newMessages] })); // ✅ Ensure messages are updated correctly
  },
}));

export default useConversation;
