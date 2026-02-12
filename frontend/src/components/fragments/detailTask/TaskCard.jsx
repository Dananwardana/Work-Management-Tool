import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";

const TaskCard = () => {
    return (
        <Card className="bg-[#7FA5C5] border-none">
            <CardContent className="p-6 flex justify-between">
                {/* Info task */}
                <div>
                    <h2 className="text-3xl font-bold mb-3">
                        Manajemen Workflow Internal
                    </h2>

                    <p className="mb-4">
                        Tombol edit belum fix dan masi ada bug
                    </p>

                    <div className="flex gap-2">
                        <Badge className="rounded-full">
                            create at : 12 des 2021
                        </Badge>
                        <Badge className="rounded-full">
                            due date : 15 des 2021
                        </Badge>
                    </div>
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

export default TaskCard;
