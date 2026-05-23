export interface PatientIntakeData {
  name: string;
  age: string; // required
  sex: string; // required, "Male" | "Female" | "Other"
  bmi: number;
  ethnicity: string;
  
  systolic: number;
  diastolic: number;
  heartRate: number;
  spo2: number;
  glucose: number;
  hba1c: number;
  totalChol: number;
  ldl: number;
  hdl: number;
  
  smoking: string; // "Yes" | "No" | "Former"
  alcohol: string; // "None" | "Occasional" | "Moderate" | "Heavy"
  activity: string; // "Sedentary" | "Light" | "Moderate" | "Active"
  sleep: number;
  diet: string; // "Poor" | "Balanced" | "Optimal"
  stressLevel: string; // "Low" | "Medium" | "High"
  familyHistory: string[];
  existingConditions: string[];
  medications: string;
  symptomsDuration: string;
}

export interface DiseaseRisk {
  name: string;
  risk: number;
}

export interface ClinicalFactor {
  name: string;
  impact: number;
  status: string;
}

export interface Recommendations {
  title: string;
  detail: string;
}

export interface QMLPredictionResult {
  overallRiskScore: number;
  overallRiskLevel: "LOW" | "MODERATE" | "HIGH" | "VERY HIGH";
  modelConfidence: number;
  qubitsEncoded: number;
  classicalAccuracy: number;
  quantumAccuracy: number;
  primaryDisease: string;
  diseases: DiseaseRisk[];
  factors: ClinicalFactor[];
  summary: string;
  recs: Recommendations[];
}
