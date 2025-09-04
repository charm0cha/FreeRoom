import { useEffect, useState } from "react";
import axios from "axios";

type Room = { id:string; name:string; status:"free"|"busy"; next_free_at?:string|null };

export default function App() {
  const [rooms,setRooms] = useState<Room[]>([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState<string|null>(null);

  const load = async ()=> {
    try {
      setLoading(true);
      const {data} = await axios.get("/api/availability");
      setRooms(data);
    } catch(e:any){
      setError(e.message);
    } finally { setLoading(false); }
  };

  useEffect(()=>{ load(); },[]);

  const book = async (room_id:string)=>{
    try {
      await axios.post("/api/bookings",{room_id});
      await load();
      alert("Booked for 30 mins");
    } catch(e:any){
      alert(e.response?.data?.detail || "Booking failed");
    }
  };

  if(loading) return <div className="p-6 text-xl">Loading…</div>;
  if(error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl mb-4">Meeting Rooms — Kiosk</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {rooms.map(r=>(
          <div key={r.id} className="border rounded p-4">
            <div className="text-lg font-semibold">{r.name}</div>
            <div className={`mt-1 ${r.status==="free" ? "text-green-600":"text-red-600"}`}>
              {r.status.toUpperCase()}
            </div>
            {r.next_free_at && <div className="text-sm opacity-70">Next free: {new Date(r.next_free_at).toLocaleTimeString()}</div>}
            <button
              className="mt-3 px-3 py-2 rounded bg-black text-white disabled:opacity-40"
              disabled={r.status!=="free"}
              onClick={()=>book(r.id)}
            >
              Book 30 mins
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
