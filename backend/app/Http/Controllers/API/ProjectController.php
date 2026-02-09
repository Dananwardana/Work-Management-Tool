<?php

namespace App\Http\Controllers\API;

use App\Models\Project;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
       Gate::authorize('viewAny', Project::class);

        $baseQuery = Project::query()
            ->visibleTo($request->user())
            ->latest();
        
        $projects = $baseQuery->get()->groupBy('status');

        return response()->json([
            'success' => true,
            'to_do' => ProjectResource::collection($projects->get('to_do', collect())),
            'in_progress' => ProjectResource::collection($projects->get('in_progress', collect())),
            'done' => ProjectResource::collection($projects->get('done', collect()))
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Gate::authorize('create', Project::class);

        $fields = $request->validate([
            'nama_project'=> ['required','string','max:255'],
            'deskripsi' => ['nullable','string'],
            'status' => ['required','in:to_do,in_progress,done'],
            'start_date' => ['nullable','date'],
            'end_date' => ['nullable','date','after_or_equal:start_date'],
            'PIC' => ['required','exists:users,id'],
        ]);

        $resource = Project::create($fields);

        return response()->json([
            'success' => true,
            'data' => new ProjectResource($resource)
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
       Gate::authorize('view', $project);

        return response()->json([
            'success' => true,
            'data' => new ProjectResource($project)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        Gate::authorize('update', $project);

        $fields = $request->validate([
            'nama_project'=> ['sometimes','required','string','max:255'],
            'deskripsi' => ['sometimes','nullable','string'],
            'status' => ['sometimes','required','in:to_do,in_progress,done'],
            'start_date' => ['sometimes','nullable','date'],
            'end_date' => ['sometimes','nullable','date','after_or_equal:start_date'],
            'PIC' => ['sometimes','required','exists:users,id'],
        ]);
        
        $project->update($fields);

        return response()->json([
            'success' => true,
            'data' => new ProjectResource($project)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        Gate::authorize('delete', $project);
    
        $project->delete();

        return response()->noContent();
    }
}
