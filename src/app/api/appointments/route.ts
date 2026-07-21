import { NextResponse } from 'next/server';
import { db } from '@/db';
import { appointments, patients, doctors } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const allAppointments = await db.select().from(appointments);
    return NextResponse.json(allAppointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في جلب المواعيد' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { patientId, doctorId, appointmentDate, startTime, endTime, reason, notes } = await request.json();

    // Check if patient exists
    const patient = await db.select().from(patients).where(eq(patients.id, patientId)).limit(1);
    if (patient.length === 0) {
      return NextResponse.json(
        { error: 'المريض غير موجود' },
        { status: 400 }
      );
    }

    // Check if doctor exists
    const doctor = await db.select().from(doctors).where(eq(doctors.id, doctorId)).limit(1);
    if (doctor.length === 0) {
      return NextResponse.json(
        { error: 'الطبيب غير موجود' },
        { status: 400 }
      );
    }

    // Create appointment
    const newAppointment = await db.insert(appointments).values({
      patientId,
      doctorId,
      appointmentDate: new Date(appointmentDate),
      startTime,
      endTime,
      reason,
      notes,
      status: 'pending',
    }).returning();

    return NextResponse.json(
      { message: 'تم حجز الموعد بنجاح', appointment: newAppointment[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في حجز الموعد' },
      { status: 500 }
    );
  }
}