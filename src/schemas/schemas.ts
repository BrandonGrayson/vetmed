export default interface Medication {
    created_at: string;
    description: string;
    dont_take_with: string[];
    id: number;
    name: string;
    used_for: string;
    user_id: number;
  }