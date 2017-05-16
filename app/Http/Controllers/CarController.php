<?php

namespace App\Http\Controllers;

use App\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{

    protected $request;

    public function __construct(Request $request)
    {
        $this->middleware('jwt.auth',   ['only' => ['store','update','delete']]);
        $this->request = $request;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if ($this->request->input('all') !== 'true') {
            if (($owner_id = $this->request->input('owner_id')) && is_numeric($owner_id)) {
                $results = \App\Car::with(['carParts', 'owner'])->where('owner_id', $owner_id)->paginate(5);
            } else {
                $results = \App\Car::with(['carParts', 'owner'])->paginate(5);
            }
        } else {
            $results = \App\Car::get();
        }
        return $results;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $car = new Car();
        $this->validate($request, [
            'model' => 'required|in:audi,vw,bmw,opel,mercedes,mazda|max:50',
            'version' => 'required|string|min:2|max:50',
            'year_of_production' => 'required|digits:4',
            'color' => 'nullable|min:3|max:6',
            'vin' => 'required|string|max:50',
            'owner_id' => 'required|exists:owners,id'
        ]);

        $car->model = $request->model;
        $car->version = $request->version;
        $car->year_of_production = $request->year_of_production;
        $car->color = $request->color;
        $car->vin = $request->vin;
        $car->owner_id = $request->owner_id;
        $car->touch();
        return $car;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Car $car
     * @return \Illuminate\Http\Response
     */
    public function show(Car $car)
    {
        return $car;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Car $car
     * @return \Illuminate\Http\Response
     */
    public function edit(Car $car)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Car $car
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Car $car)
    {
        $this->validate($request, [
            'model' => 'required|in:audi,vw,bmw,opel,mercedes,mazda|max:50',
            'version' => 'required|string|min:2|max:50',
            'year_of_production' => 'required|digits:4',
            'color' => 'nullable|min:3|max:6',
            'vin' => 'required|string|max:50',
            'owner_id' => 'required|exists:owners,id'
        ]);

        $car->model = $request->model;
        $car->version = $request->version;
        $car->year_of_production = $request->year_of_production;
        $car->color = $request->color;
        $car->vin = $request->vin;
        $car->owner_id = $request->owner_id;
        $car->touch();
        return $car;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Car $car
     * @return \Illuminate\Http\Response
     */
    public function destroy(Car $car)
    {
        $car->delete();
        $results = \App\Car::with('carParts')->paginate(5);
        return $results;
    }
}
