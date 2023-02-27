import { FacilityOutputDTO } from "../presenters/facility/facility.output.dto";

export interface FAcilityGateway {
  findById(id: string): Promise<FacilityOutputDTO>
}