import {
    arrayRemove,
    arrayUnion,
    collection,
    deleteDoc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
  } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import {
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "lib/firebase";
import { useState } from "react";
import { useDocumentData, useCollectionData } from "react-firebase-hooks/firestore";


import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "lib/routes";

export function useAddPoll() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const navigate = useNavigate()

  async function addPoll(poll) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "polls", id), {
      ...poll,
      id,
      date: Date.now(),
      likes: [],
    });
    toast({
      title: "Poll added successfully!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });
    setLoading(false);
    navigate(DASHBOARD)
  }

  return { addPoll, isLoading };
}

export function usePoll(id) {
    const q = doc(db, "polls", id);
    const [post, isLoading] = useDocumentData(q);
  
    return { post, isLoading };
  }
  
  export function usePolls(uid = null) {
    const q = uid
      ? query(
          collection(db, "polls"),
          orderBy("date", "desc"),
          where("uid", "==", uid)
        )
      : query(collection(db, "polls"), orderBy("date", "desc"));
    const [polls, isLoading, error] = useCollectionData(q);
    if (error) throw error;
    return { polls, isLoading };
  }