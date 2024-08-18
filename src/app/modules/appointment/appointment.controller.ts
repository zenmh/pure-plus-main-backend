import { Request, Response } from 'express';
import { Appointment } from '@prisma/client';
import catchAsync from '../../../shared/catch-async';
import sendResponse from '../../../shared/send-response';
import { AppointmentService } from './appointment.service';

const createAnAppointment = catchAsync(async (req: Request, res: Response) => {
  const data = await AppointmentService.createAnAppointment(req.body);

  sendResponse<Appointment>(res, {
    statusCode: 200,
    success: true,
    message: 'Appointment created',
    data,
  });
});

export const AppointmentController = { createAnAppointment };
