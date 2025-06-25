import React from "react";
import { Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthErrorProps {
  onLogin: () => void;
}

export function AuthError({ onLogin }: AuthErrorProps) {
  return (
    <Card className="border-amber-200 bg-amber-50">
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <Lock className="h-5 w-5 text-amber-500 mr-2" />
          <CardTitle className="text-amber-700 text-base">
            Authentication Required
          </CardTitle>
        </div>
        <CardDescription className="text-amber-600">
          Please sign in to access learning materials
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-amber-600 mb-4">
          You need to be signed in to manage your learning materials
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-amber-300 text-amber-700 hover:bg-amber-100"
            onClick={onLogin}
          >
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
