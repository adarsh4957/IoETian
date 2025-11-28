"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Download, FileText, Search } from "lucide-react"
import { useState } from "react"

type DriveLinks = {
  [key: `${string}-${string}`]: string;
}

export default function RepositoryPage() {
  const [selectedBranch, setSelectedBranch] = useState("")
  const [selectedSemester, setSelectedSemester] = useState("")

  const driveLinks: DriveLinks = {
    "cse-sem-1": "https://drive.google.com/drive/folders/17nApw0VduvfG8VpgTtfRV5tK7yzpo58d?usp=drive_link",
    "cse-sem-2": "https://drive.google.com/drive/folders/1simhIrJQxPsspSvdCrMv7vPXoWGdEH1A?usp=drive_link",
    "cse-sem-3": "https://drive.google.com/drive/folders/1-qsTmhwtQ1HrGztTb4cTeNdIoEqV1xQ0?usp=sharing",
    "ece-sem-1": "https://drive.google.com/drive/folders/1QrgFpY35LjD3vmhaCj8NJ9ITgKwAndLx?usp=drive_link",
    "ece-sem-2": "https://drive.google.com/drive/folders/1b6vzJR2d2bzPIzOUKP89FBUvG3ELY0-u?usp=drive_link",
    "ae-sem-1": "https://drive.google.com/drive/folders/1oNdjztw01Va2KFAX32tLD39rGKWz6mg8?usp=drive_link",
    "ae-sem-2": "https://drive.google.com/drive/folders/1LQ2wEx49kjn5sKf9EW7--p7oUQnCnlR1?usp=drive_link",
  }

  const handleSearch = () => {
    if (!selectedBranch || !selectedSemester) {
      alert("Please select both branch and semester")
      return
    }

    const linkKey = `${selectedBranch}-sem-${selectedSemester}` as keyof DriveLinks;
    const driveLink = driveLinks[linkKey]

    if (driveLink) {
      window.open(driveLink, '_blank')
    } else {
      alert("No resources found for selected combination")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted py-12 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Academic Repository</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access previous year question papers, study materials, and resources organized by year and branch.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8">
          <div className="bg-card rounded-lg p-6 border">
            <h2 className="text-xl font-bold mb-4">Search Resources</h2>
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <label htmlFor="branch" className="block text-sm font-medium mb-2">
                  Branch
                </label>
                <Select onValueChange={setSelectedBranch}>
                  <SelectTrigger id="branch">
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cse">Computer Science Engineering</SelectItem>
                    <SelectItem value="ece">Electronics & Communication</SelectItem>
                    <SelectItem value="ae">Aerospace Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="semester" className="block text-sm font-medium mb-2">
                  Semester
                </label>
                <Select onValueChange={setSelectedSemester}>
                  <SelectTrigger id="semester">
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Semester 1</SelectItem>
                    <SelectItem value="2">Semester 2</SelectItem>
                    <SelectItem value="3">Semester 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="search" className="block text-sm font-medium mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search" placeholder="Search by subject or keyword" className="pl-8" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button onClick={handleSearch}>Search Resources</Button>
            </div>
          </div>

          <Tabs defaultValue="question-papers">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="question-papers">Question Papers</TabsTrigger>
              <TabsTrigger value="study-materials">Study Materials</TabsTrigger>
            </TabsList>

            <TabsContent value="question-papers" className="mt-6">
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Engineering Maths - 1</h3>
                          <p className="text-sm text-muted-foreground">End Semester Examination, 2024</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">CSE</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Semester 1</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">2024</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://drive.google.com/file/d/1EXD7dPmeTiLBOIlOGEPoJ64GHapPlQSI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Engineering Maths - I</h3>
                          <p className="text-sm text-muted-foreground">End Semester Examination, 2024</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">ECE</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Semester 1</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">2024</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://drive.google.com/file/d/1HymCBzgkB9cwWIbd1k2E8wrcQ2drqmGT/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Engineering Chemistry</h3>
                          <p className="text-sm text-muted-foreground">End Semester Examination, 2024</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">CSE</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Semester 1</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">2024</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://drive.google.com/file/d/1AWmli4EIMd4Q04AxshwjsM7Meqv3VL4X/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">ECE - 2023 PYQ</h3>
                          <p className="text-sm text-muted-foreground">End Semester Examination, 2023</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">ECE</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Semester 1</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">2023</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://drive.google.com/file/d/1L2EMdFHTsq3J7U11_gIqpxFodtCsX4I5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="study-materials" className="mt-6">
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Data Structures and Algorithms - Lecture Notes</h3>
                          <p className="text-sm text-muted-foreground">Complete semester notes with examples</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">CSE</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Semester 3</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">2023</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Machine Learning - Tutorial Solutions</h3>
                          <p className="text-sm text-muted-foreground">Solved problems and assignments</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">CSE</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Semester 6</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">2022</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">Computer Networks - Lab Manual</h3>
                          <p className="text-sm text-muted-foreground">Practical experiments and procedures</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">CSE</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Semester 5</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">2022</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1 px-4">
              1
            </Button>
            <Button variant="outline" className="mx-1 px-4">
              2
            </Button>
            <Button variant="outline" className="mx-1 px-4">
              3
            </Button>
            <Button variant="outline" className="mx-1 px-4">
              4
            </Button>
            <Button variant="outline" className="mx-1 px-4">
              5
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

