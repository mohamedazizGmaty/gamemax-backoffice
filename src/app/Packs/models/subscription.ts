export class Subscription {
  constructor(
    public id_subscription: number,
    public user_id: number,
    public starting_date: string, // or Date
    public expiration_date: string, // or Date
    public subscription_type: string
  ) {}
}
