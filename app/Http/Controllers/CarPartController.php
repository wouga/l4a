<?php

namespace App\Http\Controllers;

use App\CarPart;
use Illuminate\Http\Request;

class CarPartController extends Controller
{

    protected $request;

    public function __construct(Request $request)
    {
        $this->middleware('jwt.auth',   ['only' => ['store','update','destroy']]);
        $this->request = $request;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if ($this->request->input('all') !== 'true') {
            if (($car_id = $this->request->input('car_id')) && is_numeric($car_id)) {
                $results = \App\CarPart::with('car')->where('car_id', $car_id)->paginate(5);
            } else {
                $results = \App\CarPart::with('car')->paginate(5);
            }
        } else {
            $results = \App\CarPart::get();
        }
        return $results;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $carPart = new  CarPart();

        $this->validate($request, [
            'model' => 'required|max:200',
            'number' => 'required|integer',
            'price' => 'required|numeric',
            'car_id' => 'required|exists:cars,id'
        ]);

        $carPart->model = $request->model;
        $carPart->number = $request->number;
        $carPart->price = $request->price;
        $carPart->car_id = $request->car_id;
        $carPart->touch();
        return $carPart;
    }

    /**
     * @param  \App\CarPart $carPart
     * @return \Illuminate\Http\Response
     */
    public function show(CarPart $carPart)
    {
        return $carPart;
    }

    /**
     * @param  \App\CarPart $carPart
     * @return \Illuminate\Http\Response
     */
    public function edit(CarPart $carPart)
    {
        //
    }

    /**
     * @param  \Illuminate\Http\Request $request
     * @param  \App\CarPart $carPart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CarPart $carPart)
    {
        $this->validate($request, [
            'model' => 'required|max:200',
            'number' => 'required|integer',
            'price' => 'required|numeric',
            'car_id' => 'required|exists:cars,id'
        ]);

        $carPart->model = $request->model;
        $carPart->number = $request->number;
        $carPart->price = $request->price;
        $carPart->car_id = $request->car_id;
        $carPart->touch();
        return $carPart;
    }

    /**
     * @param  \App\CarPart $carPart
     * @return \Illuminate\Http\Response
     */
    public function destroy(CarPart $carPart)
    {
        $carPart->delete();
        $results = \App\CarPart::with('car')->paginate(5);
        return $results;
    }
}
