import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";

const NoteCard = ({ note }) => {
    return (
        <Card className="bg-[#7FA5C5] border-none">
            <CardContent className="p-4 flex justify-between">
                {/* Note content */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-orange-500 text-white text-xs">
                                MR
                            </AvatarFallback>
                        </Avatar>
                        <span className="bg-white rounded-full px-3 py-1 text-sm">
                            {note.author}
                        </span>
                    </div>

                    <p>{note.content}</p>
                </div>

                {/* Action */}
                <div className="flex flex-col gap-2">
                    <Button size="icon" variant="ghost">
                        <Edit />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <Trash2 />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default NoteCard;
