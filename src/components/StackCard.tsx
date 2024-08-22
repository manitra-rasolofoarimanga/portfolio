import { Card, CardBody, Chip } from '@material-tailwind/react';
import { StackCardProps } from '../types/stack';

const StackCard: React.FC<StackCardProps> = ({img, details}) => {
    return (
        <Card data-aos={"zoom-in"} className="card m-4 lg:m-0 w-auto bg-white/70">
            <CardBody>
                <div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
                    <div className="card__front absolute top-0 bottom-0 right-0 left-0 py-8 flex items-center justify-center">
                        <img src={img} alt="java svg" width="100px" height="100px"/>
                    </div>
                    <div className="card__back absolute top-0 bottom-0 right-0 left-0 py-8 flex items-center flex-wrap justify-center">
                        {details.map((detail, index) => (
                            <Chip key={index} value={detail} className="rounded-full bg-light-grey mx-1" />
                        ))}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default StackCard;