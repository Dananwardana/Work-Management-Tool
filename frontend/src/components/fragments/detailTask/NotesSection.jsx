import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import NoteCard from "./NoteCard";

const notes = [
    { id: 1, author: "Mahesa Rahmad", content: "Tombol edit belum fix" },
    { id: 2, author: "Mahesa Rahmad", content: "Masih ada bug kecil" },
];

const NotesSection = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Button add note */}
            <div className="flex justify-end">
                <Button className="rounded-full">
                    <Plus className="mr-2" />
                    Add Notes
                </Button>
            </div>

            {/* List notes */}
            <div className="grid grid-cols-2 gap-4">
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
};

export default NotesSection;
