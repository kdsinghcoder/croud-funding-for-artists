import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export default function ArtistCard(props) {
    return (
        <div className="">
            <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <CardImage
                    src="https://i.imgur.com/htS3GSE.jpg"
                    alt="Card Image"
                    className="h-60 w-full"
                />

                <div class="px-6 py-4">
                    <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Patterson johnson</h1>

                    <p class="py-2 text-gray-700 dark:text-gray-400">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>

                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-left">patterson@example.com</div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-right">asmjajs</div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-left">patterson@example.com</div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-right">asmjajs</div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-left">patterson@example.com</div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-right">asmjajs</div>

                </div>
                <CardFooter>
                    <div class="p-2 float-left">
                        <Button color="lightBlue" size="lg" ripple="light">
                            Contribute
                        </Button>
                    </div>
                    <div class="px-2 text-sm mt-2 mb-2 text-gray-700 dark:text-gray-200 float-right">
                        <div class="grid grid-rows-1 grid-flow-col gap-4">
                            <div class="float-center">
                                <div style={{
                                    margin: 'auto',
                                    display: 'block',
                                    width: 'fit-content'
                                }}>
                                    <FormControlLabel
                                        control={<Checkbox icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            name="checkedH" />}
                                        label={props.likes}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <input class="rounded-lg overflow-hidden h-2 w-full" type="range" min="1" max="100" value="50" />
                    </div>
                </CardFooter>
            </div>
        </div>
    );
}