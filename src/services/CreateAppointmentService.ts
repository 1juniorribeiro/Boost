import { startOfDay } from 'date-fns';

import { getCustomRepository } from 'typeorm';

import Appointment from '../models/appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  user_id: string;
  client_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({
    date,
    client_id,
    user_id,
  }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfDay(date);

    const appointment = appointmentsRepository.create({
      client_id,
      user_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
