/**
 * v0 by Vercel.
 * @see https://v0.dev/t/saN0ZKnCXnp
 */
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">Find Your Perfect Hosting Platform</h1>
      <p className="text-xl text-center mb-10 text-gray-600 dark:text-gray-300">
        Answer a few questions and we'll suggest the best hosting platform for you.
      </p>
      <form className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="question1">What is your budget?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="question2">What is your technical expertise?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your expertise level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="question3">What is your primary need?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your primary need" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="portfolio">Portfolio</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Find My Hosting Platform
        </Button>
      </form>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Recommended Hosting Platform</h2>
        <p className="text-xl text-center mt-2 text-gray-600 dark:text-gray-300">
          Based on your responses, we recommend:
        </p>
        <div className="flex justify-center items-center mt-10">
          <Card className="mx-auto max-w-md p-6">
            <img
              alt="Hosting Platform Logo"
              height="200"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png"
              style={{
                // aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <CardTitle className="text-2xl text-center my-4">Hosting Platform Name</CardTitle>
            <CardDescription className="text-center mb-4">
              A brief description about why this hosting platform is recommended for the user.
            </CardDescription>
            <div className="text-center">
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                variant="default"
              >
                Visit Website
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
