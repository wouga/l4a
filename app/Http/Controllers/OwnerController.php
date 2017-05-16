<?php

namespace App\Http\Controllers;

use App\Owner;
use Illuminate\Http\Request;

class OwnerController extends Controller
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
            $results = \App\Owner::with('cars')->paginate(5);
        } else {
            $results = \App\Owner::get();
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
        $owner = new owner();

        $this->validate($request, [
            'email' => 'required|email|max:50',
            'phone' => 'required|min:9|max:50',
            'name' => 'required|min:2|max:50',
            'surname' => 'nullable|min:2|max:50',
            'newsletter' => 'boolean',
            'sex' => 'boolean',
        ]);

        $owner->email = $request->email;
        $owner->phone = $request->phone;
        $owner->name = $request->name;
        $owner->surname = $request->surname;
        $owner->newsletter = $request->newsletter;
        $owner->sex = $request->sex;
        $owner->touch();

        return $owner;
    }

    /**
     * @param  \App\Owner $owner
     * @return \Illuminate\Http\Response
     */
    public function show(Owner $owner)
    {
        return $owner;
    }

    /**
     * @param  \App\Owner $owner
     * @return \Illuminate\Http\Response
     */
    public function edit(Owner $owner)
    {
        //
    }

    /**
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Owner $owner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Owner $owner)
    {
        $this->validate($request, [
            'email' => 'required|email|max:50',
            'phone' => 'required|min:9|max:50',
            'name' => 'required|min:2|max:50',
            'surname' => 'nullable|min:2|max:50',
            'newsletter' => 'boolean',
            'sex' => 'boolean',
        ]);

        $owner->email = $request->email;
        $owner->phone = $request->phone;
        $owner->name = $request->name;
        $owner->surname = $request->surname;
        $owner->newsletter = $request->newsletter;
        $owner->sex = $request->sex;
        $owner->touch();
        return $owner;
    }

    /**
     * @param  \App\Owner $owner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Owner $owner)
    {
        $owner->delete();
        $results = \App\Owner::with('cars')->paginate(5);
        return $results;
    }
}
