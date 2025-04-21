import { Button } from "@/components/ui/button";
import { setIsAuthenticated, userSelector } from "@/features/auth";
import { cn, logout } from "@/lib/utils";
import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Profile: React.FC = () => {
  const { user } = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // TODO: Impliment favorites and watchlist feature
  const favoriteMovies = [];

  const handleLogout = () => {
    const success = logout();
    if (success) {
      dispatch(setIsAuthenticated(false));
      navigate("/");
    } else {
      console.error("Something went worng with logout.");
    }
  };

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <h4 className="text-3xl">
          My Profile -
          <span
            className={cn("ml-2 text-2xl text-blue-400", "dark:text-red-400")}
          >
            {user?.username}
          </span>
        </h4>
        <Button
          className="flex cursor-pointer gap-2 uppercase"
          variant="ghost"
          onClick={handleLogout}
        >
          Logout <LogOut />
        </Button>
      </div>

      {!favoriteMovies.length ? (
        <h5 className="text-xl">
          Add favorites or watchlist some movies to see them here!
        </h5>
      ) : (
        <div>FAVORITE MOVIES</div>
      )}
    </div>
  );
};
export default Profile;
