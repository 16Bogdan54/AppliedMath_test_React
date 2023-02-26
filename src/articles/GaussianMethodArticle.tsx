import Typography from "@mui/material/Typography";

const GaussianMethodArticle = () => {
    return (
        <div className="p-2 lg:overflow-y-scroll lg:max-h-[90vh] ">
            <Typography variant="h3" gutterBottom>The Gaussian method</Typography>
            <Typography variant="body2" gutterBottom>The Gaussian method, also known as Gaussian elimination or row reduction, is a powerful mathematical technique for solving systems of linear equations. It is named after the German mathematician Carl Friedrich Gauss, who developed the method in the early 19th century. The Gaussian method is widely used in many fields of science and engineering, including physics, economics, and computer science.</Typography>
            <Typography variant="body2" gutterBottom>The Gaussian method works by transforming a system of linear equations into an equivalent system that is easier to solve. The method involves three basic operations: swapping two equations, multiplying an equation by a constant, and adding a multiple of one equation to another. These operations are used to eliminate variables and create a triangular system of equations that can be easily solved.</Typography>
            <Typography variant="body1" gutterBottom>To illustrate how the Gaussian method works, let's consider a simple system of linear equations:</Typography>
            <Typography variant="body2" gutterBottom>
                x + y + z = 6<br/>
                2x + 3y + z = 11<br/>
                4x + 5y + 2z = 18<br/>
            </Typography>
            <Typography variant="body1" gutterBottom>We can write this system in matrix form as:</Typography>
            <Typography variant="body2" gutterBottom>
                [ 1  1  1 ][ x ]   [ 6 ]<br/>
                | 2  3  1 || y | = | 11|<br/>
                [ 4  5  2 ][ z ]   [ 18]<br/>
            </Typography>
            <Typography variant="body1" gutterBottom>To solve this system using the Gaussian method, we start by creating a triangular system of equations. We can do this by using the first equation to eliminate x from the second and third equations. To eliminate x from the second equation, we multiply the first equation by -2 and add it to the second equation:</Typography>
            <Typography variant="body2" gutterBottom>
                [ 1  1  1 ][ x ]   [ 6 ]<br/>
                | 0  1 -1 || y | = |-1 |<br/>
                [ 0  1 -2 ][ z ]   [-6 ]<br/>
            </Typography>
            <Typography variant="body1" gutterBottom>To eliminate x from the third equation, we multiply the first equation by -4 and add it to the third equation:</Typography>
            <Typography variant="body2" gutterBottom>
                [ 1  1  1 ][ x ]   [ 6 ]<br/>
                | 0  1 -1 || y | = |-1 |<br/>
                | 0  1 -2 || z | = |-6|<br/>
            </Typography>
            <Typography variant="body1" gutterBottom>
            Next, we use the second equation to eliminate y from the third equation. To do this, we multiply the second equation by -1 and add it to the third equation:
            </Typography>
            <Typography variant="body2" gutterBottom>
                [ 1  1  1 ][ x ]   [ 6 ]<br/>
                | 0  1 -1 || y | = |-1 |<br/>
                | 0  0 -1 || z | = | 5 |<br/>
            </Typography>
            <Typography variant="body1" gutterBottom>
            Finally, we can solve for z by back-substituting into the second equation and then solving for y and x:
            </Typography>
            <Typography variant="body2" gutterBottom>
                z = 5<br/>
                y = 2<br/>
                x = -1<br/>
            </Typography>
            <Typography variant="body2" gutterBottom>
            Thus, the solution to the system of linear equations is x = -1, y = 2, and z = 5.
            </Typography>
            <Typography variant="body2" gutterBottom>
            The Gaussian method can be extended to larger systems of linear equations, and can also be used to compute matrix inverses and determinants. It is a powerful tool for solving problems in mathematics, science, and engineering, and its widespread use is a testament to its effectiveness.
            </Typography>
        </div>
    );
};

export default GaussianMethodArticle;