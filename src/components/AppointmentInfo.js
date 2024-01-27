import { BiTrash } from "react-icons/bi";

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button
        onClick={() => onDeleteAppointment(appointment.id)}
        type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline"
      >
        <BiTrash />
      </button>
      <div className="felx-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {appointment.petName}
          </span>
          <span className="flex-grow text-right">{appointment.apDate}</span>
        </div>
        <div>
          <b className="font-bold text-blue-500">Owner:</b>{" "}
          {appointment.ownerName}{" "}
        </div>
        <div className="leading-tight">{appointment.aptNotes}</div>
      </div>
    </li>
  );
};
export default AppointmentInfo;
