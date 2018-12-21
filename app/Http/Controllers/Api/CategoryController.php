<?php

namespace App\Http\Controllers\Api;

use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Category::paginate(10);

        return response()->json($result);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
           'category_name' => 'required|max:255',
       ]);
        if ($validator->fails()) {
            return response(['type'=>'error','message'=>$validator->messages()]);
        } else {
            Category::create([
            'name'=> $request->category_name,
        ]);
            return response(['type'=>'success','message'=>'Successfully added']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        return $category;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $validator = Validator::make($request->all(), [
         'category_name' => 'required|max:20|string',
         'category_status' => 'required|integer',
     ]);
        if ($validator->fails()) {
            return response(['type'=>'error','message'=>$validator->messages()]);
        } else {
            $category->name = $request->category_name;
            $category->active = $request->category_status;
            $category->update();
            return response(['type'=>'success','message'=>'Successfully Updated']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id = null)
    {
        if ($id !=null) {
            $category = Category::find($id);
            $category->delete();
            $data = Category::all();
            return response(['type' => 'success','message'=>'The Category has successfully deleted','data'=>$data]);
        }
    }
}
