import TaskHeader from "@/components/fragments/detailTask/TaskHeader";
import TaskCard from "@/components/fragments/detailTask/TaskCard";
import NotesSection from "@/components/fragments/detailTask/NotesSection";

const Tasks = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Header halaman task */}
            <TaskHeader />

            {/* Detail task */}
            <TaskCard />

            {/* Notes */}
            <NotesSection />
        </div>
    );
};

export default Tasks;
