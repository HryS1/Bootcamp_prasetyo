@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">User Details</div>

                <div class="card-body">
                    <div class="row mb-3">
                        <label class="col-md-4 col-form-label text-md-end">Name</label>
                        <div class="col-md-6">
                            <p class="form-control-plaintext">{{ $user->name }}</p>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label class="col-md-4 col-form-label text-md-end">Email</label>
                        <div class="col-md-6">
                            <p class="form-control-plaintext">{{ $user->email }}</p>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label class="col-md-4 col-form-label text-md-end">Status</label>
                        <div class="col-md-6">
                            <span class="badge bg-{{ $user->status == 'active' ? 'success' : 'secondary' }}">
                                {{ ucfirst($user->status) }}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label class="col-md-4 col-form-label text-md-end">Created At</label>
                        <div class="col-md-6">
                            <p class="form-control-plaintext">{{ $user->created_at->format('d M Y H:i') }}</p>
                        </div>
                    </div>

                    <div class="row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <a href="{{ route('users.edit', $user->id) }}" class="btn btn-primary">
                                Edit
                            </a>
                            <a href="{{ route('users.index') }}" class="btn btn-secondary">
                                Back to List
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection