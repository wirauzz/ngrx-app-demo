import { Subscription } from "rxjs";
import { Address } from "./Address";
import { Credit_Card } from "./CreditCard";
import { Employment } from "./Employment";

export class User{
    id: number;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: number;
    date_of_birth: string;
    employment: Employment;
    address: Address;
    credit_card: Credit_Card;
    subscription: Subscription;
  }