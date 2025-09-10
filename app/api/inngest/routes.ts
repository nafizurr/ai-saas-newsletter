import {serve}from "inngest/next";
import { functions } from "@/lib/inngest/functions/functions";
import {inngest} from "@/lib/inngest/functions/client";

export const {GET, POST, PUT} = serve({client: inngest, functions});