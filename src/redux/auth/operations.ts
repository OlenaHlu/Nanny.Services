import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, firestore } from "../../fetch/firebase";
