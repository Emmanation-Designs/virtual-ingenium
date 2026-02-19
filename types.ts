
export interface ServiceRequest {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  need: string;
  projectContext1: string; // Used for Colors (Design) or Tech Stack (Software)
  projectContext2: string; // Used for Size (Design) or Platform (Software)
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
