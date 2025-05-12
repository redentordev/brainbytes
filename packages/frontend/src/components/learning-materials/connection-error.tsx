import React from "react";
import { ServerOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ConnectionErrorProps {
  onRetry: () => void;
}

export function ConnectionError({ onRetry }: ConnectionErrorProps) {
  return (
    <Card className="border-red-200 bg-red-50">
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <ServerOff className="h-5 w-5 text-red-500 mr-2" />
          <CardTitle className="text-red-700 text-base">
            Connection Error
          </CardTitle>
        </div>
        <CardDescription className="text-red-600">
          Could not connect to the backend server
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-red-600 mb-4">
          Make sure the backend server is running at http://localhost:3001
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-red-300 text-red-700 hover:bg-red-100"
            onClick={onRetry}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry Connection
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
