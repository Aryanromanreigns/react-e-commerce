import { useAuth } from "../context/AuthContext"

const Profile = () => {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl">Please login to view profile</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md text-center">
        <div className="w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto text-3xl font-bold">
          {user.name[0]}
        </div>

        <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  )
}

export default Profile
