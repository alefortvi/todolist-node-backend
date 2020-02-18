import {Request, Response} from 'express';
import Job from '../models/job';
import State from '../models/state';
import path from 'path';
import fs from 'fs-extra';


export async function getStates(req : Request, res : Response) : Promise<Response> {
    console.log("Recupero stados");
    const states = await State.find();
    return res.json(states);
}

export async function getAllJobs(req : Request, res : Response) : Promise<Response> {
    console.log("Recupero tareas");
    const jobs = await Job.find();
    return res.json(jobs);
}

// export async function getPhotoByID(req : Request, res : Response) : Promise<Response> {
//     const { id } = req.params;
//     const photo = await Photo.findById(id);
//     return res.json(photo);
// }

// create new job to do
export async function createJob(req : Request, res : Response) : Promise<Response> {
    console.log("body", req.body);
    const { state, description } = req.body;

    const newJob = {
        state : state,
        description: description,
        imagePath : req.file.path
    };

    const job = new Job(newJob);
    await job.save();

    return res.json({
        message: "Tarea creada correctamente",
        info : job
    });
}

export async function orderById(req : Request, res : Response) : Promise<Response> {
    console.log(req.params);
    const { by } = req.query;
    console.log("parametro", by);
    const jobs = await Job.find().sort(by);

    return res.json(jobs);
}

export async function editState(req : Request, res : Response) : Promise<Response> {

    const { state } = req.body;
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id,{
        state : state,
    }, {new: true});


    return res.json({
        message: "tarea modificada",
        info : job
    });
}
